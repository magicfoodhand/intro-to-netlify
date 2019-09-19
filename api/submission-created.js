export async function handler(event, context) {

    let { payload } = JSON.parse(event.body)
    
    let formName = payload.form_name
    if(formName !== 'contact') {
        console.log(`Submission from ${formName}`)
        return {
            statusCode: 400,
            body: JSON.stringify({ message: `Unsupported submission from form ${formName}` })
        };
    }

    let {name, message} = payload.data

    console.log(`Recieved Message from ${name} - ${message}`)

    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Hello world ${Math.floor(Math.random() * 10)}` })
    };
  }