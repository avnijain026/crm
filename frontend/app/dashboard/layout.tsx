"use client"
import React, { Dispatch, SetStateAction, useState } from "react";
import { IconType } from "react-icons";

import {
  FiBox,
  FiChevronsRight,
  FiHome,
  FiLogOut,
  FiUser,
} from "react-icons/fi";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useIsMobile from "../hooks/useMobile";
import useAuthStore from "../store/useAuthStore";
import { log } from "console";
import { FaLessThan } from "react-icons/fa";
import { HiSpeakerphone } from "react-icons/hi";

export default function Example({children } : {children: React.ReactNode}) {
  const isMobile = useIsMobile();

  if (isMobile) {
    return(<>
    {children}
    </>)
  }
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">{children}</div>
    </div>
  );
};

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState("Dashboard");
  const {logout} = useAuthStore();
  const router = useRouter();
  
  return (
    <motion.nav
      layout
      className="sticky top-0 h-screen shrink-0 border-r border-gradient-to-b from-slate-200 to-slate-300 bg-gradient-to-br from-slate-50 via-white to-blue-50 p-3 shadow-xl"
      style={{
        width: open ? "15%" : "fit-content",
      }}
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <TitleSection open={open} />

      <div className="space-y-2">
        <Option
          Icon={FiHome}
          title="Dashboard"
          selected={selected}
          setSelected={setSelected}
          open={open}
          href="/dashboard"
        />
        <Option
          Icon={FiUser}
          title="Customers"
          selected={selected}
          setSelected={setSelected}
          open={open}
          href="/dashboard/customers"
        />
        <Option
          Icon={FiBox}
          title="Orders"
          selected={selected}
          setSelected={setSelected}
          open={open}
          href="/dashboard/orders"
        />
        <Option
          Icon={FaLessThan}
          title="Segment Rules"
          selected={selected}
          setSelected={setSelected}
          open={open}
          href="/dashboard/segment-rules"
        />
        <Option
          Icon={HiSpeakerphone}
          title="Campaign"
          selected={selected}
          setSelected={setSelected}
          open={open}
          href="/dashboard/campaign"
        />
        <Option
          Icon={HiSpeakerphone}
          title="Campaign History"
          selected={selected}
          setSelected={setSelected}
          open={open}
          href="/dashboard/campaigns"
        />
        <Option
          Icon={FiLogOut}
          title="Logout"
          selected={selected}
          setSelected={setSelected}
          open={open}
          onClick={() => {
            logout();
            router.push("/");
          }}
        />
      </div>

      <ToggleClose open={open} setOpen={setOpen} />
    </motion.nav>
  );
};

const Option = ({
  Icon,
  title,
  selected,
  setSelected,
  open,
  href, 
  onClick
}: {
  Icon: IconType;
  title: string;
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
  open: boolean;
  href?: string;
  onClick?: () => void;
}) => {
  const isLogout = title === "Logout";
  const isSelected = selected === title;

  const buttonVariants = {
    initial: { scale: 1, y: 0 },
    hover: { 
      scale: 1.02, 
      y: -2,
      transition: { duration: 0.2, ease: "easeOut" }
    },
    tap: { 
      scale: 0.98,
      transition: { duration: 0.1 }
    }
  };

  const iconVariants = {
    initial: { rotate: 0, scale: 1 },
    hover: { 
      rotate: isLogout ? 0 : 5, 
      scale: 1.1,
      transition: { duration: 0.2 }
    }
  };

  const getButtonClasses = () => {
    if (isLogout) {
      return `relative flex h-12 w-full items-center rounded-xl transition-all duration-300 ${
        isSelected 
          ? "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-200" 
          : "text-red-500 hover:bg-gradient-to-r hover:from-red-50 hover:to-red-100 hover:shadow-md"
      }`;
    }
    
    return `relative flex h-12 w-full items-center rounded-xl transition-all duration-300 ${
      isSelected 
        ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-200 border border-blue-300" 
        : "text-slate-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:shadow-md hover:border hover:border-blue-200"
    }`;
  };

  return (
    <>
      {isLogout ? (
        <motion.button
          layout
          onClick={onClick}
          className={getButtonClasses()}
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
        >
          <motion.div
            layout
            className="grid h-full w-12 place-content-center text-xl"
            variants={iconVariants}
          >
            <Icon />
          </motion.div>
          {open && (
            <motion.span
              layout
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="text-sm font-semibold"
            >
              {title}
            </motion.span>
          )}
          {isSelected && (
            <motion.div
              className="absolute right-2 h-2 w-2 rounded-full bg-white"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
            />
          )}
        </motion.button>
      ) : (
        <Link href={href as string}>
          <motion.button
            layout
            onClick={() => setSelected(title)}
            className={getButtonClasses()}
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
          >
            <motion.div
              layout
              className="grid h-full w-12 place-content-center text-xl"
              variants={iconVariants}
            >
              <Icon />
            </motion.div>
            {open && (
              <motion.span
                layout
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                className="text-sm font-semibold"
              >
                {title}
              </motion.span>
            )}
            {isSelected && (
              <motion.div
                className="absolute right-2 h-2 w-2 rounded-full bg-white"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
              />
            )}
          </motion.button>
        </Link>
      )}
    </>
  );
};

const TitleSection = ({ open }: { open: boolean }) => {
  return (
    <motion.div 
      className="mb-6 border-b border-gradient-to-r from-slate-200 to-blue-200 pb-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <motion.div 
        className="flex cursor-pointer items-center justify-center rounded-xl p-3 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:shadow-md"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="flex items-center justify-center gap-2">
          <motion.p 
            className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            CRM
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ToggleClose = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <motion.button
      layout
      onClick={() => setOpen((pv) => !pv)}
      className="absolute bottom-0 left-0 right-0 border-t border-gradient-to-r from-slate-200 to-blue-200 transition-all duration-300 hover:bg-gradient-to-r hover:from-slate-50 hover:to-blue-50"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center p-3">
        <motion.div
          layout
          className="grid size-10 place-content-center text-lg text-slate-600"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.2 }}
          >
            <FiChevronsRight />
          </motion.div>
        </motion.div>
        {open && (
          <motion.span
            layout
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
            className="text-sm font-semibold text-slate-600"
          >
            Hide
          </motion.span>
        )}
      </div>
    </motion.button>
  );
};