const listA = ["Investors", "Features", "Book a demo", "Security"];
const listB = ["Credit Cards", "Gift Cards", "Savings Accounts", "NFT"];
const listC = ["Free rewards", "Documentation", "Affiliate program"];
const listD = ["Changelog", "License", "Site Maps", "News"];

const linkList = (title, list) => (
  <div className="space-y-4 min-w-fit">
    <h5 className="font-bold">{title}</h5>

    <ul className="space-y-2">
      {list.map((item, i) => (
        <li className="text-secondary text-sm" key={i}>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-[#292834]/25 mt-[128px] ">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-y-5 gap-x-2.5 lg:gap-8 py-12 w-full max-w-[1440px] px-2.5 md:px-10 lg:px-20 xl:px-24  mx-auto">
        <div className="space-y-2 col-span-2">
          <h4 className="font-bold text-lg">Wern Finance</h4>

          <p className="text-secondary text-sm max-w-[287px]">
            Discover the power of our secure and rewarding credit cards
          </p>
        </div>

        {linkList("About Us", listA)}
        {linkList("Products", listB)}
        {linkList("Useful Links", listC)}
        {linkList("Social", listD)}
      </div>
    </footer>
  );
};

export default Footer;

