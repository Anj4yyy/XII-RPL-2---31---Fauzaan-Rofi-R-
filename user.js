let users = [
    {id: 1, nama: "Anj4yyy", email: "rofiradytya7337@gmail.com"},
    {id: 2, nama: "Fauzan", email: "541211073@student.smktelkom-pwt.sch.id"},
]

module.exports = {
    index:  (req, res) => {
        if(users.length > 0){
            res.json({
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
    },
    store:  (req, res) => {
        users.push(req.body)
        res.json({
            status: true,
            data: users,
            method: req.method,
            url: req.url,
            messege: "Data berhasil ditambahkan" 
        })
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