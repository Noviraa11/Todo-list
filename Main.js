import {Button, Image} from 'react-bootstrap';
import { Plus } from 'react-bootstrap-icons';
import activity from './../../assets/activity.png';
import './Main.css';

function Main() {
  return (
    <div className='card'>
        <div className='title'>Activity</div>
        <Button href='/activity' className='button' style={{background: '#16ABF8', borderRadius: '45px', fontFamily: 'Poppins', fontWeight: '600', fontSize: '18px', lineHeight: '27px'}}><Plus className='icon' />Tambah</Button>
        <a href='/activity'><Image className='img' src={activity} /></a>
    </div>
  );
}

export default Main;