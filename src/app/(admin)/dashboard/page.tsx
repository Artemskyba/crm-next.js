import React from 'react';
import Header from '@/app/components/header';
import ErrorMaker from '@/app/components/error-maker';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <>
      <Header>Dashboard</Header>
    </>
  );
}
