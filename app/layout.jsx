import './globals.css'
import icon from '@public/CMALogo.png'

export const metadata = {
    title: 'ChainMaster Academy',
    description: 'Blockchain for Everyone',
    icons: {
      icon: [
        { url: '/CMALogo.png' }, // main favicon
        { url: '/CMALogo.png', type: 'image/png' },
      ],
    },
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <div className="main">
                 <div className="gradient" />
            </div>

            <main className="app">
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout