import { Breadcrumbs, BreadcrumbItem } from '@nextui-org/breadcrumbs';

export default function Breadcrumb() {
  return (
    <Breadcrumbs
      separator="/"
      itemClasses={{
        separator: 'px-2',
      }}>
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>Music</BreadcrumbItem>
      <BreadcrumbItem>Artist</BreadcrumbItem>
      <BreadcrumbItem>Album</BreadcrumbItem>
      <BreadcrumbItem>Song</BreadcrumbItem>
    </Breadcrumbs>
  );
}
