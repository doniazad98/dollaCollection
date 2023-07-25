import { moderateScale } from '@/helpers/Layout'

const Typography = {
  b1: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: moderateScale(18),
    lineHeight: moderateScale(22),
  },
  b2: {
    fontFamily: 'Montserrat-Medium',
    fontSize: moderateScale(14),
    letterSpacing: -0.02 * moderateScale(14),
  },
  b3: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: moderateScale(14),
    letterSpacing: -0.02 * moderateScale(14),
  },
  b4: {
    fontFamily: 'Montserrat-Bold',
    fontSize: moderateScale(14),
    letterSpacing: -0.02 * moderateScale(14),
  },
  b5: {
    fontFamily: 'Montserrat-Bold',
    fontSize: moderateScale(12),
    letterSpacing: -0.02 * moderateScale(12),
    lineHeight: moderateScale(22),
  },
  h1: {
    fontFamily: 'Montserrat-Bold',
    fontSize: moderateScale(22),
    letterSpacing: -0.02 * moderateScale(22),
    lineHeight: moderateScale(22),
  },
  p1: {
    fontFamily: 'Montserrat-Regular',
    fontSize: moderateScale(16),
    letterSpacing: -0.02 * moderateScale(16),
    lineHeight: moderateScale(22),
  },
  p2: {
    fontFamily: 'Montserrat-Regular',
    fontSize: moderateScale(14),
    letterSpacing: -0.02 * moderateScale(14),
    lineHeight: moderateScale(22),
  },
  t1: {
    fontFamily: 'Montserrat-Regular',
    fontSize: moderateScale(14),
    letterSpacing: -0.02 * moderateScale(14),
  },
  t2: {
    fontFamily: 'Montserrat-Regular',
    fontSize: moderateScale(12),
    letterSpacing: -0.02 * moderateScale(12),
    lineHeight: moderateScale(22),
  },
  t3: {
    fontFamily: 'Montserrat-Regular',
    fontSize: moderateScale(12),
    letterSpacing: -0.02 * moderateScale(12),
  },
  t4: {
    fontFamily: 'Montserrat-Bold',
    fontSize: moderateScale(8),
    letterSpacing: -0.04 * moderateScale(8),
    lineHeight: moderateScale(20),
  },
} as const

export default Typography
