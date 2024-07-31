'use client';

import React, { useEffect, useState } from 'react';
import Button, { ButtonProps } from './button';

export default function ErrorMaker(props: ButtonProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 2) {
      throw new Error('Unknown error');
    }
  }, [count]);

  return (
    <div className="ml-10">
      <p>{count}</p>
      <Button {...props} onClick={() => setCount(count + 1)}>
        Click me!
      </Button>
    </div>
  );
}
