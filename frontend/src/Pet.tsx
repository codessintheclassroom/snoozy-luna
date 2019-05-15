import React from 'react';

export default interface Pet {
    readonly id: string;
    name: string;
    kind: string;
    description: string;
}