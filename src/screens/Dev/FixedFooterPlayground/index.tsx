import { FixedFooter } from '@/components/base/FixedFooter'
import { View } from '@/components/base/View'
import React, { useState } from 'react'
import styles from './styles'

const FixedFooterPlayground = () => {
  const [step] = useState<number>(1)
  return (
    <View flex style={styles.container}>
      <FixedFooter currentStep={step}>
        {/* {step === 1 ? (
          <>
            <PropertyActions
              fundedPercentage={100}
              fundedText='Funded'
              investorsText='Investors'
              percentage={5.56}
              numOfInverstors={24}
              buttonText='Sell'
              optionButton
            />
          </>
        ) : (
          <>
            <PropertyCard
              name='Night Sky Hotel'
              source={require('assets/images/Rectangle65.jpg')}
              location='Las Vegas, USA'
              fundedPercentage={52}
              percentage={5.54}
              fundedText='funded'
              expectedYText='expected yield'
            />
          </>
        )} */}
      </FixedFooter>
    </View>
  )
}
export default FixedFooterPlayground
