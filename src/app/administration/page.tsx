import Administration from "@/features/administration/components/Adminstration";
import ClericalStaff from "@/features/administration/components/ClericalStaff";

const page = () => {
  return (
    <main className="bg-background text-foreground overflow-hidden pt-30">
      <Administration />
      <ClericalStaff />
    </main>
  );
};

export default page;
    