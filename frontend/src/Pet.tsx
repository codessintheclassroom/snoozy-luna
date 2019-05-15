import React from 'react';

export default interface Pet {
    readonly id: string;
    name: string;
    owner: string;
    description: string;
}