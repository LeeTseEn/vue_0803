export const reg_url = (val) => {
  const validate = /^((ht|f)tps?):\/\/[\w\-]+(\.[\w\-]+)+([\w\-.,@?^=%&:\/~+#]*[\w\-@?^=%&\/~+#])?$/
  return validate.test(val)
}

export const reg_username = (val) => {
  const validate = /^[a-zA-z]\w{8,16}$/
  return validate.test(val)
}

export const reg_password = (val) => {
  const validate = /^(?=.*?[a-z)(?=.*>[A-Z])(?=.*?[0-9])[a-zA_Z0-9]{6,16}$/
  return validate.test(val)
}

export const reg_website = (val) => {
  const validate = /^((ht|f)tps?):\/\/[\w\-]+(\.[\w\-]+)+([\w\-.,@?^=%&:\/~+#]*[\w\-@?^=%&\/~+#])?$/
  return validate.test(val)
}

export const reg_email = (val) => {
  const validate = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
  return validate.test(val)
}

export const reg_phone = (val) => {
  const validate = /^0\d{3}-?\d{3}-?\d{3}$/
  return validate.test(val)
}

