// src/lib/socket.js
import { io } from 'socket.io-client';
import { browser } from '$app/environment';
import { PUBLIC_VERCEL_URL_BACK, PUBLIC_LOCAL_URL_BACK, PUBLIC_ENV } from '$env/static/public';

// Configure Database URL
let BD =
	PUBLIC_ENV === 'prod' ? (PUBLIC_VERCEL_URL_BACK as string) : (PUBLIC_LOCAL_URL_BACK as string);

const socket = io(BD as string);

export default socket;
