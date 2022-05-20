import axios from 'axios';

interface ILoginApiProps {
    id: string;
    pw: string;
}

export async function loginApi(data: ILoginApiProps) {
    const axioxConfig = {
        headers : {
            'Content-Type' : 'application/json'
        }
    }
    const response = await axios.post('/api/users/login', data, axioxConfig);
    return response?.data;
}
