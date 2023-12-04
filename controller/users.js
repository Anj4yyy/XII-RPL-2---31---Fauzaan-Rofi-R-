const User = require('../models/Users')

module.exports = {
    index: async (req, res) => {
        try {
            const user = await User.find()
            if(users.length > 0){
                res.status(200).json({
                    status: true,
                    data: users,
                    method: req.method,
                    url: req.url 
                })
            }else{
                res.json({
                    status: false,
                    messege: "Data masih kosong"
                })
            }
        } catch (error) {
            res.status(400).json({success: false})
        }
        
    },
    store: async (req, res) => {
        try {
            const user = await User.create(req.body)
            res.status(200).json({
                status: true,
                data: user,
                method: req.method,
                url: req.url,
                messege: "Data berhasil ditambahkan" 
            })
        } catch (error) {
            res.status(400).json({success: false})
        }
    },
    update: (req, res) => {
        const id = req.params.id
        users.filter(user => {
            if(user.id == id){
                user.nama = req.body.nama
                user.email = req.body.email
                return user
            }
        })
        res.json({
            status: true,
            data: users,
            method: req.method,
            url: req.url,
            messege: "Data berhasil diubah" 
        })
    },
    delete: (req, res) => {
        const id = req.params.id
        users = users.filter(user => user.id != id)
    
        res.json({
            status: true,
            data: users,
            method: req.method,
            url: req.url,
            messege: "Data berhasil dihapus" 
        })
    }
}