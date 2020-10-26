import axios from 'axios'

export default function RegisterAPI(values) {
  console.log(values)
    axios ( {
      url: 'http://localhost:3333/clients',
      method: 'post',
      data: {
        "name":values.name,
        "user_name": values.user_name,
        "password": values.password,
        "first_name":values.first_name,
        "last_name":values.last_name,
        "email": values.email,
        "phone_number":values.phone_number,
        "age":values.age,
        "birth_day":values.birth_day,
        "status": values.status,
      },
      responseType: 'json', 
    }) .then(response => {
      console.log(response) 

    })
}