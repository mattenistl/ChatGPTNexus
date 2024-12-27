// Sample main layout used in Berry demo actions
import { ReactNode } from 'react';

function MainLayout({
  children: ReactNode } {
  return (
    <div>
      <div>Main header</div>
      <div style={{ margin: '10px' }}>{children}</div>
    </div>
  );
}

export default MainLayout;