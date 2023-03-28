import {Button, Card} from 'react-bootstrap';
import { Plus, Trash } from 'react-bootstrap-icons';
import './Activity.css';

function Activity() {
  return (
    <div className='body'>
        <div className='title'>Activity</div>
        <Button href='/activity' className='button' style={{background: '#16ABF8', borderRadius: '45px', fontFamily: 'Poppins', fontWeight: '600', fontSize: '18px', lineHeight: '27px'}}><Plus className='icon' />Tambah</Button>
        <Card >
            <Card.Body className='cbody'>
                <Card.Title className='cdtile'>Daftar Belanja Bulanan</Card.Title>
                <Card.Text className='date'>5 Oktober 2021 <Trash className='ticon' /></Card.Text>
            </Card.Body>
        </Card>
    </div>
  );
}

export default Activity;