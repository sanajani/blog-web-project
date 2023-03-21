import blogSettings from "../models/blogSettings.js";
import userModel from "../models/UserModel.js";
import bcrypt from 'bcrypt';

const blogSettingController = async (req, res) => {
    let blogSetting = await blogSettings.find({});
    if (blogSetting.length < 1) {
        const { blogTitle, blogDesc,name, email, password } = req.body;
        const hashPassword = await bcrypt.hashSync(password,12)

        const blog = blogSettings({
            blogTitle,
            blogDesc
        });

        let admin_inserted = userModel({
            name,
            email,
            password:hashPassword,
            isAdmin: true
        });

        await admin_inserted.save();
        await blog.save();
        return res.json({ message: "Blog setting set it", blogSetting: blog, user: admin_inserted })
    }
    return res.json({ message: "Blog Setting is created before" });
}

export { blogSettingController }