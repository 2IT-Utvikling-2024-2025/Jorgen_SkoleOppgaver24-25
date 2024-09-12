
export default function UserProfile() {

    let userProfile = {

        bilde: 'https://www.hpcwire.com/wp-content/uploads/2018/03/gpu-circuit-green_shutterstock_576941419_700x-675x380.jpg',
        width: '200px',
        alt: 'GPU Image'

    }

    return (
    <img src={userProfile.bilde} alt={userProfile.alt}  width={userProfile.width}></img>
    )
}