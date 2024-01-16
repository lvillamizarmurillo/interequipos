use('intereqiposdb')
db.admin.aggregate([
    {
        _id: 1,
        email: 'admin@gmail.com',
        password: '123'
    },
    {
        _id: 2,
        email: 'global@gmail.com',
        password: '321'
    }
])

use('intereqiposdb')
db.category.aggregate([
    {
        _id: 1,
        name: 'oficina',
        linkImage: 'http://imagen1.com'
    },
    {
        _id: 2,
        name: 'sellos',
        linkImage: 'http://imagen1.com'
    }
])

use('intereqiposdb')
db.product.aggregate([
    {
        _id: 1,
        name: 'engrapadora',
        categoria: 'oficina',
        linkImage: 'http://imagen1.com',
        linkPdf: 'http://pdf1.com',
        info: 'info del producto 1'
    },
    {
        _id: 2,
        name: 'engrapadora',
        categoria: 'sellos',
        linkImage: 'http://imagen2.com',
        linkPdf: 'http://pdf2.com',
        info: 'info del producto 2'
    },
    {
        _id: 1,
        name: 'engrapadora',
        categoria: 'oficina',
        linkImage: 'http://imagen3.com',
        linkPdf: 'http://pdf3.com',
        info: 'info del producto 3'
    }
])