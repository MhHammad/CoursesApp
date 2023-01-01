class SessionService {

    setRole(role) {
      sessionStorage.setItem("role", role)
    }
  
    getRole() {
      return sessionStorage.getItem("role")
    }
  
    storeUser(user) {
      sessionStorage.setItem("user", JSON.stringify(user));// response.data
    }
  
    getCurrentUser() {
      return JSON.parse(sessionStorage.getItem('user'));
    }
  
    logout() {
      sessionStorage.removeItem("user");
      sessionStorage.removeItem("homeMaker")
      sessionStorage.removeItem("role")
      sessionStorage.removeItem("price")
    }
  }
  
  export default new SessionService();