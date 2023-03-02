import { styled } from '..'

export const ProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',
  gap: '4.5rem',
  maxWidth: '1180px',
  margin: '0 auto'
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: '576px',
  height: '656px',
  borderRadius: '8px',
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  boxShadow: '0px 0px 48px rgba(0, 0, 0, 0.9)',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover'
  }
})

export const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  maxWidth: '520px',

  h1: {
    fontSize: '$2xl',
    lineHeight: '140%',
    fontWeight: 'bold',
    color: '$gray300',
    margin: '1rem 0'
  },

  span: {
    fontSize: '$2xl',
    lineHeight: '140%',
    color: '$green300'
  },

  p: {
    fontSize: '$md',
    color: '$gray300',
    lineHeight: '160%',
    marginTop: '2.5rem'
  },

  button: {
    padding: '1.25rem 0',
    borderRadius: '8px',
    backgroundColor: '$green500',
    border: 'none',
    lineHeight: '160%',
    fontSize: '$md',
    fontWeight: 'bold',
    color: '$white',
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: '$green300',
    }
  }
})