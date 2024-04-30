import { Box, Flex, Text, Button, useColorMode, VStack, HStack, Input, Table, Thead, Tbody, Tr, Th, Td, Tab, TabList, TabPanels, TabPanel, Tabs } from '@chakra-ui/react';
import { FaToggleOn, FaToggleOff } from 'react-icons/fa';

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <Box>
      <Flex justifyContent="space-between" p="4" bg="white" color="almostBlack">
        <HStack spacing="24px">
          <Button variant="ghost">Home</Button>
          <Button variant="ghost">Bots</Button>
          <Button variant="ghost">Settings</Button>
          <Button variant="ghost">Account</Button>
        </HStack>
        <HStack spacing="24px">
          <Button onClick={toggleColorMode} leftIcon={isDark ? <FaToggleOff /> : <FaToggleOn />}>Test Mode</Button>
          <Button colorScheme="blue">Log out</Button>
        </HStack>
      </Flex>
      <Flex direction="row" p="4" gap="4">
        <Box flex="1" bg="gray.100" p="4" borderRadius="lg" boxShadow="md">
          <Text fontSize="xl">✨ Trades</Text>
          <Text fontSize="2xl">$21,359</Text>
        </Box>
        <Box flex="1" bg="gray.100" p="4" borderRadius="lg" boxShadow="md">
          <Text fontSize="xl">💰 Profit</Text>
          <Text fontSize="2xl">$5,630</Text>
        </Box>
        <Box flex="1" bg="gray.100" p="4" borderRadius="lg" boxShadow="md">
          <Text fontSize="xl">⛰️ Milestones</Text>
          <VStack>
            <Input placeholder="Take profit" />
            <Button colorScheme="blue">Submit</Button>
          </VStack>
        </Box>
      </Flex>
      <Box bg="gray.100" p="4" borderRadius="lg" boxShadow="md" my="4">
        <Text fontSize="xl">Asset Development Chart</Text>
        {/* Placeholder for chart */}
      </Box>
      <Tabs variant="enclosed">
        <TabList>
          <Tab>Trades</Tab>
          <Tab>Activities</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Input placeholder="Search Trades" my="4" />
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Date</Th>
                  <Th>Bot Identifier</Th>
                  <Th>Start</Th>
                  <Th>End</Th>
                  <Th>Duration</Th>
                  <Th>Result</Th>
                  <Th>Profit</Th>
                  <Th>% Change</Th>
                </Tr>
              </Thead>
              <Tbody>
                {/* Mock data rows */}
              </Tbody>
            </Table>
          </TabPanel>
          <TabPanel>
            <Input placeholder="Search Activities" my="4" />
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Date</Th>
                  <Th>Activity</Th>
                  <Th>Details</Th>
                </Tr>
              </Thead>
              <Tbody>
                {/* Mock data rows */}
              </Tbody>
            </Table>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Flex justifyContent="center" p="4" bg="gray.200">
        <Text>© 2023 Crypto Dashboard</Text>
      </Flex>
    </Box>
  );
};

export default Index;