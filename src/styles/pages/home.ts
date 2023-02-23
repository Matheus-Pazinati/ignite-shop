import { styled } from "..";

export const HomeContainer = styled('main', {
  display: 'flex',
  alignItems: 'center',
  gap: '3rem',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  marginLeft: 'auto',
  minHeight: '656px',
})

export const ProductCard = styled('a', {
  borderRadius: '8px',
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  boxShadow: '0px 0px 48px rgba(0, 0, 0, 0.9)',
  cursor: 'pointer',
  position: 'relative',
  height: '100%',
  padding: '0.25rem',
  minHeight: '656px',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflowY: 'hidden',

  img: {
    objectFit: 'cover'
  },

  footer: {
    padding: '2rem',
    background: 'rgba(0, 0, 0, 0.6)',
    borderRadius: '6px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    left: '0.25rem',
    bottom: '0.25rem',
    right: '0.25rem',
    transition: 'all 0.2s ease-in-out',
    transform: 'translateY(110%)',
    opacity: 0,

    strong: {
      fontSize: 'lg',
      color: '$gray100',
      fontWeight: '700'
    },

    span: {
      fontSize: 'xl',
      color: '$green300',
      fontWeight: '700'
    }
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    }
  }
})