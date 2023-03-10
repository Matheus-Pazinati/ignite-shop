import * as Dialog from '@radix-ui/react-dialog';
import { styled } from '..';

export const CartContainer = styled(Dialog.Content, {
  position: 'fixed',
  top: '0',
  right: '0',
  width: '480px',
  background: '$gray800',
  padding: '4rem 3rem 3rem',
  height: '100%',

  '& .CartTitle': {
    fontSize: '$lg',
    fontWeight: 'bold'
  },

  '& .CartCloseButton': {
    position: 'absolute',
    top: '1.5rem',
    right: '1.5rem',
    border: 'none',
    background: 'transparent',
    cursor: 'pointer'
  }
})

export const CartProducts = styled('section', {
  maxWidth: '384px',
  marginTop: '2rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',

  '& .ProductContainer': {
    display: 'flex',
    alignItems: 'stretch',
    gap: '1.25rem',

    '& .ProductImage': {
      height: '93px',
      width: '100px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
      borderRadius: '8px',

      img: {
        objectFit: 'cover'
      }
    },

    '& .ProductDetails': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',

      p: {
        fontSize: '$md',
        color: '$gray300',
        margin: '0.25rem 0 0.5rem'
      },

      span: {
        fontSize: '$md',
        color: '$gray100',
        fontWeight: 'bold'
      },

      button: {
        textAlign: 'left',
        background: 'transparent',
        border: 'none',
        fontSize: '1rem',
        color: '$green500',
        fontWeight: 'bold',
        cursor: 'pointer',
        marginBotton: '0.25rem',

        '&:hover': {
          color: '$green300',
        }
      }
    }
  }
})