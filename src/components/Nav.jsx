function Nav(props) {
  return (
    <a href={props.href} className="">
      {props.navName}
    </a>
  );
}

export default Nav;
