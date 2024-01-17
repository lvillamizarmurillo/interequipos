use('intereqiposdb');
db.createCollection('admin', {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ['email', 'password', 'zone', 'phone'],
            properties: {
                email: { bsonType: 'string', pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$", uniqueItems: true, message: 'Email es obligatorio y debe ser una dirección de correo electrónico válida.' },
                password: { bsonType: 'string', message: 'Password es obligatorio y debe ser una cadena de caracteres.' },
                zone: { bsonType: 'string', pattern: "^[A-Z][a-z]+$", uniqueItems: true, message: 'Zone es obligatorio y debe ser una cadena de caracteres con la primera letra en mayúscula y el resto en minúscula.' },
                phone: { bsonType: 'string', pattern: "^[0-9]+$", message: 'Phone es obligatorio y debe contener solo números.' }
            }
        }
    }
});

use('intereqiposdb');
db.createCollection('category', {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ['name', 'path', 'link'],
            properties: {
                name: { bsonType: 'string', pattern: "^[A-Z]+$", uniqueItems: true, message: 'Name es obligatorio y debe contener solo letras mayúsculas.' },
                path: { bsonType: 'string', message: 'Path es obligatorio y debe ser una cadena de caracteres.' },
                link: { bsonType: 'string', message: 'Link es obligatorio y debe ser una cadena de caracteres.' }
            }
        }
    }
});

use('intereqiposdb');
db.createCollection('product', {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ['name', 'category', 'images', 'productPdf', 'info', 'zone'],
            properties: {
                name: { bsonType: 'string', message: 'Name es obligatorio y debe ser una cadena de caracteres.' },
                category: { bsonType: 'string', pattern: "^[A-Z]+$", message: 'Category es obligatorio y debe contener solo letras mayúsculas.' },
                images: {
                    bsonType: 'array',
                    items: {
                        bsonType: 'object',
                        properties: {
                            path: { bsonType: 'string', message: 'Path en images es obligatorio y debe ser una cadena de caracteres.' },
                            link: { bsonType: 'string', message: 'Link en images es obligatorio y debe ser una cadena de caracteres.' }
                        }
                    }
                },
                productPdf: {
                    bsonType: 'object',
                    properties: {
                        path: { bsonType: 'string', message: 'Path en productPdf es obligatorio y debe ser una cadena de caracteres.' },
                        link: { bsonType: 'string', message: 'Link en productPdf es obligatorio y debe ser una cadena de caracteres.' }
                    }
                },
                info: { bsonType: 'string', message: 'Info es obligatorio y debe ser una cadena de caracteres.' },
                zone: { bsonType: 'string', pattern: "^[A-Z][a-z]+$", message: 'Zone es obligatorio y debe ser una cadena de caracteres con la primera letra en mayúscula y el resto en minúscula.' }
            }
        }
    }
});

use('intereqiposdb');
db.createCollection('contact', {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ['socialNetworks'],
            properties: {
                socialNetworks: {
                    bsonType: 'object',
                    properties: {
                        facebook: { bsonType: 'string', message: 'Facebook es obligatorio y debe ser una cadena de caracteres.' },
                        twitter: { bsonType: 'string', message: 'Twitter es obligatorio y debe ser una cadena de caracteres.' },
                        instagram: { bsonType: 'string', message: 'Instagram es obligatorio y debe ser una cadena de caracteres.' },
                        whatsapp: { bsonType: 'string', pattern: "^[0-9]+$", message: 'WhatsApp es obligatorio y debe contener solo números.' }
                    }
                }
            }
        }
    }
});

use('intereqiposdb');
db.createCollection('zones', {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ['zone'],
            properties: {
                zone: {
                    bsonType: 'object',
                    patternProperties: {
                        "^[A-Za-z]+$": {
                            bsonType: 'object',
                            properties: {
                                emailsContacts: {
                                    bsonType: 'object',
                                    properties: {
                                        oficina: { bsonType: 'string', message: 'Oficina es obligatorio y debe ser una cadena de caracteres.' },
                                        soporte: { bsonType: 'string', message: 'Soporte es obligatorio y debe ser una cadena de caracteres.' },
                                        gerencia: { bsonType: 'string', message: 'Gerencia es obligatorio y debe ser una cadena de caracteres.' }
                                    }
                                },
                                numberContact: { bsonType: 'array', items: { bsonType: 'string', message: 'NumberContact debe ser un array que contenga solo cadenas de caracteres.' } },
                                address: { bsonType: 'array', items: { bsonType: 'string', message: 'Address debe ser un array que contenga solo cadenas de caracteres.' } }
                            }
                        }
                    }
                }
            }
        }
    }
});