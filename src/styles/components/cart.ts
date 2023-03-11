import * as Dialog from '@radix-ui/react-dialog';
import { styled } from '..';

export const CartContainer = styled(Dialog.Content, {
  position: 'fixed',
  top: '0',
  right: '0',
  width: '480px',
  background: '$gray800',
  padding: '2rem 3rem 3rem',
  height: '100%',

  '& .CartContent': {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },

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
      flex: '1',

      '& .ProductTitle': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      },

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
        background: 'transparent',
        border: 'none',
        fontSize: '1rem',
        color: '$green500',
        cursor: 'pointer',

        '&:hover': {
          color: '$green300',
        }
      },

      '& .ProductQuantityContainer': {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        label: {
          fontSize: '1rem',
          fontWeight: 'bold',
          color: '$green500'
        },
        select: {
          padding: '0.05rem',
          borderRadius: '4px',
          outline: 'none',
          cursor: 'pointer',
          border: '2px solid #00875F',
          fontSize: '14px',
          background: 'transparent',
          color: '#FFF',
    
          option: {
            background: '$gray900',
          }
        }
      }
    }
  }
})

export const CartDetails = styled('section', {
  display: 'flex',
  flexDirection: 'column',

  div: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  '& .DetailsQuantity': {
    marginBottom: '0.5rem',
    p: {
      fontSize: '1rem',
      color: '$gray100'
    },

    span: {
      fontSize: '$md',
      color: '$gray300'
    }
  },

  '& .DetailsPrice': {
    p: {
      fontSize: '$md',
      color: '$gray100',
      fontWeight: 'bold'
    },

    span: {
      fontSize: '$xl',
      color: '$gray100',
      fontWeight: 'bold'
    }
  },

  button: {
    padding: '1.25rem',
    fontSize: '$md',
    color: '#FFF',
    fontWeight: 'bold',
    background: '$green500',
    borderRadius: '8px',
    cursor: 'pointer',
    border: 'none',
    marginTop: '2.5rem',

    '&:hover' : {
      background: '$green300',
    }
  }
})