import Colors from '@/constants/Colors'
import Dimensions from '@/constants/Dimensions'
import Spacing from '@/constants/Spacing'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  loadingContainer: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%',
  },
})

export const variantsStyles = {
  outline: {
    pressableDisabled: {
      backgroundColor: Colors.gray,
    },
    pressableStyle: {
      borderColor: Colors.veronica,
      borderRadius: Spacing.vertical.size16,
      borderWidth: 2,
      minHeight: Dimensions.height.size48,
    },
    typographyStyle: {
      color: Colors.veronica,
    },
  },
  primary: {
    pressableDisabled: {
      backgroundColor: Colors.gray,
    },
    pressableStyle: {
      borderRadius: Spacing.vertical.size16,
      minHeight: Dimensions.height.size48,
    },
    typographyStyle: {
      color: Colors.white,
    },
  },
  secondary: {
    pressableDisabled: {
      backgroundColor: Colors.gray,
    },
    pressableStyle: {
      backgroundColor: Colors.white,
      borderRadius: Spacing.vertical.size16,
      minHeight: Dimensions.height.size48,
    },
    typographyStyle: {
      color: Colors.codgray,
    },
  },
  text: {
    pressableDisabled: {
      opacity: 0.7,
    },
    pressableStyle: {
      borderRadius: Spacing.vertical.size12,
      minHeight: Dimensions.height.size48,
    },
    typographyStyle: {
      color: Colors.veronica,
    },
  },
} as const
