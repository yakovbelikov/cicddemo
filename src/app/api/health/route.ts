import { NextResponse } from 'next/server';

import packageJson from '../../../../package.json';

export const GET = () =>
    NextResponse.json({
        date: new Date().toISOString(),
        message: 'Ok',
        uptime: process.uptime(),
        version: packageJson.version,
    });
