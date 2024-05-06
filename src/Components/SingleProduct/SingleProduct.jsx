export default function SingleProduct(item){
    const {name, id, username, email} = item.item;
    
    return(
        <div>
            <h3>Name: {name}</h3>
            <h4>UserName: {username}</h4>
            <p>User Id: {id}</p>
            <h5><small>Email: {email}</small></h5>
        </div>
    )
}