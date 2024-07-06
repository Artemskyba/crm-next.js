import clsx from 'clsx';
import React from 'react';
export enum Status {
  Active = 'active',
  NotActive = 'notActive',
  Pending = 'pending',
  Suspended = 'suspended',
}

export interface ActiveLabelProps {
  children: React.ReactNode;
  status: Status;
}

export default function StatusLabel({ children, status }: ActiveLabelProps) {
  return (
    <div
      className={clsx(
        'ml-2 py-1 rounded-3xl px-3.5 text-sm font-medium inline-flex items-center',
        status === Status.Active && 'text-green-700 bg-green-200',
        status === Status.NotActive && 'text-red-700 bg-red-200',
        status === Status.Pending && 'text-orange-700 bg-orange-200',
        status === Status.Suspended && 'text-blue-700 bg-blue-200',
      )}
    >
      <div className="w-2 h-2 mr-2 rounded-full bg-current"></div>
      {children}
    </div>
  );
}
