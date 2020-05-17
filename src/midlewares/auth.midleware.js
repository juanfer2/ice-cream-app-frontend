export const setSession = (user) => {
  console.log('?LocalStorage')
  console.log(user)

  localStorage.setItem('id', user.id)
  localStorage.setItem('token', user.token)
  localStorage.setItem('last_name', user.last_name)
  localStorage.removeItem('name', user.last_name)
  localStorage.setItem('first_name', user.first_name)
  localStorage.setItem('email', user.email)
}

export const logout = () => {
  localStorage.removeItem('id')
  localStorage.removeItem('token')
  localStorage.removeItem('last_name')
  localStorage.removeItem('first_name')
  localStorage.removeItem('name')
  localStorage.removeItem('email')
}

export const isAuth = () => {
  if (localStorage.getItem('token') != null) {
    return true
  } else {
    return false
  }
}
