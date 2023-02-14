import Nav from './Nav';

export default function Layout({ children }) {
    return (
        <div className='mx-14'>
            <Nav />
            {children}
        </div>

    );
}