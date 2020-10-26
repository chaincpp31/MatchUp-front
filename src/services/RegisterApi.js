import axios from 'axios'

export default function RegisterAPI(values,setErrors) {
  console.log(values)
    axios ( {
      url: 'http://localhost:3333/clients',
      method: 'post',
      data: {
        "name":values.name,
        "user_name": values.user_name,
        "password": values.password,
        "first_name":value.first_name,
        "last_name":value.last_name,
        "email": values.email,
        "phone_number":value.phone_number,
        "age":value.age,
        "birth_day":value.birth_day,
        "status": values.status,
      },
      responseType: 'json', 
    }) .then(response => {
      console.log(response) 

    })
}
import axios from 'axios'