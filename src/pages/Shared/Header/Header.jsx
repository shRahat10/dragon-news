import logo from '../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className=' flex flex-col justify-center items-center space-y-2'>
            <img src={logo} alt="logo loading..." />
            <p className=' text-center text-lg'>Journalism Without Fear or Favour</p>
            <p>{moment().format('Do MMMM, YYYY')}</p>
        </div>
    );
};

export default Header;