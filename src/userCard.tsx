import './user.css'


export default function UserCard({ user }: { user: any  }) {
    return (
        <div className="user">
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
            <p>Company: {user.company.name}</p>
            <p>Address: {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
            <p>Geo: {user.address.geo.lat}, {user.address.geo.lng}</p>
        </div>
    )
}