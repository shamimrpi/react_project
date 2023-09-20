

export const isAuthenticated = () => {
    return !!localStorage.getItem('loginToken');
}
export const handleLogout = () =>{
   
    localStorage.removeItem('loginToken');
    localStorage.removeItem('user');
    window.location.replace("/login");
}


