import { Link } from '@inertiajs/react';

const Breadcrumb = ({ pageName }) => {
  return (
    <div className="mb-0 flex flex-col gap-3 sm:flex-row sm:items-right ">

      <nav>
        <ol className="mt-5 mr-3 flex items-center gap-2 text-2xl text-title-md2 font-semibold text-black dark:text-white">
          <li>
            <Link href="/">الرئيسية /</Link>
          </li>
          <li className="text-primary">{pageName}</li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
