'use client'
import { Heading } from '@/common/components/Heading'
import { VStack } from '@chakra-ui/react'
import { ServiceCard } from './ServiceCard/ServiceCard'

export default function DashboardPage() {
  return (
    <VStack spacing={4} align='stretch' w={'100%'} alignItems={'center'}>
      <Heading>Servicios</Heading>
      <ServiceCard>Intra</ServiceCard>
      <ServiceCard>Remoto</ServiceCard>
    </VStack>
  )
}
