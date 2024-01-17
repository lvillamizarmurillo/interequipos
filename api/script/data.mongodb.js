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
    name: 'OFICINA',
    path: "ruta/del/archivo/en/el/servidor/uploads/1234567890-nombre_del_archivo1.jpg",
    link: "http://tu-subdominio.com/uploads/1234567890-nombre_del_archivo1.jpg"
  },
  {
    name: 'SELLOS',
    path: "ruta/del/archivo/en/el/servidor/uploads/1234567890-nombre_del_archivo2.jpg",
    link: "http://tu-subdominio.com/uploads/1234567890-nombre_del_archivo2.jpg"
  }
]);

use('intereqiposdb');
db.product.insertMany([
  {
    name: 'engrapadora',
    category: 'OFICINA',
    images: [
      {
        path: 'ruta/del/archivo/en/el/servidor/uploads/1234567890-nombre_del_archivo1.jpg',
        link: 'http://tu-subdominio.com/uploads/1234567890-nombre_del_archivo1.jpg',
      },
      {
        path: 'ruta/del/archivo/en/el/servidor/uploads/1234567890-nombre_del_archivo2.jpg',
        link: 'http://tu-subdominio.com/uploads/1234567890-nombre_del_archivo2.jpg',
      }
    ],
    productPdf: {
      path: "ruta/del/archivo/en/el/servidor/uploads/1234567890-documento_ejemplo.pdf",
      link: "http://tu-subdominio.com/uploads/1234567890-documento_ejemplo.pdf"
    },
    info: 'info del producto 1',
    zone: 'Bucaramanga'
  },
  {
    name: 'engrapadora',
    category: 'SELLOS',
    images: [
      {
        path: 'ruta/del/archivo/en/el/servidor/uploads/1234567890-nombre_del_archivo1.jpg',
        link: 'http://tu-subdominio.com/uploads/1234567890-nombre_del_archivo1.jpg',
      },
      {
        path: 'ruta/del/archivo/en/el/servidor/uploads/1234567890-nombre_del_archivo2.jpg',
        link: 'http://tu-subdominio.com/uploads/1234567890-nombre_del_archivo2.jpg',
      }
    ],
    productPdf: {
      path: "ruta/del/archivo/en/el/servidor/uploads/1234567890-documento_ejemplo.pdf",
      link: "http://tu-subdominio.com/uploads/1234567890-documento_ejemplo.pdf"
    },
    info: 'info del producto 2',
    zone: 'Bucaramanga'
  },
  {
    name: 'engrapadora',
    category: 'OFICINA',
    images: [
      {
        path: 'ruta/del/archivo/en/el/servidor/uploads/1234567890-nombre_del_archivo1.jpg',
        link: 'http://tu-subdominio.com/uploads/1234567890-nombre_del_archivo1.jpg',
      },
      {
        path: 'ruta/del/archivo/en/el/servidor/uploads/1234567890-nombre_del_archivo2.jpg',
        link: 'http://tu-subdominio.com/uploads/1234567890-nombre_del_archivo2.jpg',
      }
    ],
    productPdf: {
      path: "ruta/del/archivo/en/el/servidor/uploads/1234567890-documento_ejemplo.pdf",
      link: "http://tu-subdominio.com/uploads/1234567890-documento_ejemplo.pdf"
    },
    info: 'info del producto 3',
    zone: 'Cali'
  }
]);

use('intereqiposdb');
db.contact.insertMany([
  {
    socialNetworks: {
      facebook: 'https://facebook.com/',
      twitter: 'https://twitter.com/',
      instagram: 'https://instagram.com/',
      whatsapp: '3164933049'
    }
  }
]);

use('intereqiposdb');
db.zones.insertMany([
  {
    zone: {
      Bucaramanga: {
        emailsContacts: {
          oficina: 'interequipo@gmail.com',
          soporte: 'soporte@gmail.com',
          gerencia: 'gerencia@gmail.com'
        },
        numberContact: ['3134757734','3134757734'],
        address: ['Cr. 27 # 36-38 - Int 121, Bucaramanga / Santander','La cumbre'],
      }
    }
  },
  {
    zone: {
      Cali: {
        emailsContacts: {
          oficina: 'interequipocali@gmail.com'
        },
        numberContact: ['3164933049','3134757734'],
        address: ['Cr. 27 # 36-38 - Int 121, Cali / Santander'],
      }
    }
  }
]);