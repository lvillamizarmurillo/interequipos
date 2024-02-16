use('intereqiposdb');
db.admin.insertMany([
  {
    email: 'admin@gmail.com',
    password: 'tu_contraseña_secreta',
    zone: 'Bucaramanga',
    phone: '3164933049'
  },
  {
    email: 'otro_admin@gmail.com',
    password: 'otra_contraseña_secreta',
    zone: 'Cali',
    phone: '3134757734'
  }
]);

use('intereqiposdb');
db.category.insertMany([
  {
    name: 'OFICINA'
  },
  {
    name: 'SELLOS'
  }
]);

use('intereqiposdb');
db.product.insertMany([
  {
    name: 'ENGRAPADORAUNO',
    category: 'OFICINA',
    image: 'ruta/del/archivo/en/el/servidor/uploads/1234567890-nombre_del_archivo1.jpg',
    productPdf: 'ruta/del/archivo/en/el/servidor/uploads/1234567890-documento_ejemplo.pdf',
    info: 'info del producto 1',
    zone: 'Bucaramanga'
  },
  {
    name: 'ENGRAPADORADOS',
    category: 'SELLOS',
    image: 'ruta/del/archivo/en/el/servidor/uploads/1234567890-nombre_del_archivo2.jpg',
    productPdf: 'ruta/del/archivo/en/el/servidor/uploads/1234567890-documento_ejemplo2.pdf',
    info: 'info del producto 2',
    zone: 'Bucaramanga'
  },
  {
    name: 'ENGRAPADORATRES',
    category: 'OFICINA',
    image: 'ruta/del/archivo/en/el/servidor/uploads/1234567890-nombre_del_archivo3.jpg',
    productPdf: 'ruta/del/archivo/en/el/servidor/uploads/1234567890-documento_ejemplo3.pdf',
    info: 'info del producto 3',
    zone: 'Cali'
  }
]);

use('intereqiposdb');
db.contact.insertMany([
  {
    socialNetworks: {
      facebook: 'https://facebook.com/',
      whatsapp: 'https://twitter.com/',
      instagram: 'https://instagram.com/',
      whatsapp1: '3164933049',
      whatsapp2: '3134757734'
    }
  }
]);

use('intereqiposdb');
db.zones.insertMany([
  {
    name: 'Bucaramanga',
    address: ['Cr. 27 # 36-38 - Int 121, Bucaramanga / Santander'],
  },
  {
    name: 'Cali',
    address: ['Cr. 27 # 36-38 - Int 121, Cali / Santander'],
  }
]);