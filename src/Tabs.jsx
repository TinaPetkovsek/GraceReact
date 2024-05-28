import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Naslov() {
  return (
    <div className="container flex h-40 items-center justify-center gap-4">
      <Tabs defaultValue="home" className="w-[580px]">
        <TabsList className="">
          <TabsTrigger value="home">Home</TabsTrigger>
          <TabsTrigger value="research">Research</TabsTrigger>
          <TabsTrigger value="study">Study</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="staff">Staff</TabsTrigger>
          <TabsTrigger value="equipment and facilities">
            Equipment and facilities
          </TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
        </TabsList>
        <TabsContent value="home">This is the home page.</TabsContent>

        <TabsContent value="research">
          This will somehow include a drop down menu.
        </TabsContent>

        <TabsContent value="study">This is not the home page.</TabsContent>

        <TabsContent value="projects">This is not the home page.</TabsContent>

        <TabsContent value="staff">This is not the home page.</TabsContent>

        <TabsContent value="equipment and facilities">
          This will somehow include a drop down menu.
        </TabsContent>

        <TabsContent value="contact">This is not the home page.</TabsContent>
      </Tabs>
    </div>
  );
}
