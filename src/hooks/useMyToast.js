import { useToast } from '@chakra-ui/toast'

const useMyToast = (id) => {
  const toast = useToast()
  const warningToast = (warningText) => {
    if (!toast.isActive(id)) {
      return toast({
        id,
        title: warningText,
        position: 'bottom',
        status: 'warning',
        duration: 3000,
        isClosable: true
      })
    }
  }
  const errorToast = (errorText) => {
    if (!toast.isActive(id)) {
      return toast({
        id,
        title: errorText,
        position: 'bottom',
        status: 'error',
        duration: 3000,
        isClosable: true
      })
    }
  }
  const successToast = (successText) => {
    if (!toast.isActive(id)) {
      return toast({
        id,
        title: successText,
        position: 'bottom',
        status: 'success',
        duration: 3000,
        isClosable: true
      })
    }
  }
  const infoToast = (infoText) => {
    if (!toast.isActive(id)) {
      return toast({
        id,
        title: infoText,
        position: 'bottom',
        status: 'error',
        duration: 3000,
        isClosable: true
      })
    }
  }
  return { successToast, warningToast, infoToast, errorToast }
}

export default useMyToast
