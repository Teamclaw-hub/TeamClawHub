import { ProfilePage } from "@/components/weclihub/profile-page";

export default async function Page({ params }: { params: Promise<{ login: string }> }) {
  const { login } = await params;
  return <ProfilePage login={login} />;
}
