//Este código genera la configuracion del botón de 'MercadoPago' en el Frontend
// Rama Luis
module.exports={
    get_preference: (name, id, email, number, area_code, zip_code, street_name, street_number) => {       //Botón de 'MercadoPago'
        return {
            binary_mode: true,                          //Si los precios tienen decimales

            payer: {                                    //El usuario que compra
                name: name,
                surname: id,
                email: email,
                phone: {
                    number: number,
                    area_code: area_code,
                },
                address: {
                    zip_code: zip_code,
                    street_name: street_name,
                    street_number: street_number,
                },
            },

            shipments: {                                //Datos del vendedor de los productos (Datos de dirección de la empresa El Tero)
                receiver_address: {
                    zip_code: '11011',
                    street_name: "street name",
                    street_number: 999,
                    floor: "floor",
                    apartment: 'apartment',
                    city_name: '111',
                    state_name: 'state name',
                    country_name: 'Brasil',
                    phone_number: "(011) 1569257880"
                }
            },
            
            items: [                                    //Dato del producto vendido (Datos dinámicos)
                {
                    picture_url: `{}`,
                    title: `{}`,
                    description: `{}`,
                    quantity: `{}`,
                    unit_price: `{}`,
                    //total_price: `{}`,
                }
            ],

            back_urls: {                                //Redireccionamiento del usuario dependiendo del proceso de compra en el que se encuentre
                'success': 'http://localhost:3001/feedback',
                'failure': 'http://localhost:3000',
                'pending': 'http://localhost:3001/feedback',
            },

            //Redireccionamiento automatico a 'success', 'failure' y 'pending'.
            auto_return: 'approved',
        }
    }

    //PENDIENTE PONDER LA RELACION DE 'STRIPE'
};