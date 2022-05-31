import React from "react";

import { MenuVertical, Clock } from "@bigbinary/neeto-icons";
import { Tag, Typography, Tooltip, Avatar } from "neetoui";

import { useUserState } from "contexts/user";
import { formatTime, timeAgo } from "utils/time";

const NoteCard = ({ note }) => {
  const { user } = useUserState();

  return (
    <div className="neeto-ui-border-gray-400 hover:neeto-ui-shadow-s w-full cursor-pointer gap-2 rounded-sm border p-4 transition-all">
      <div className="flex w-full items-center justify-between">
        <Typography
          style="h4"
          weight="semibold"
          className="w-11/2 mr-3 truncate leading-tight"
          data-cy="note-title"
        >
          {note.title}
        </Typography>
        <MenuVertical size={20} />
      </div>
      <Typography
        style="body2"
        className="neeto-ui-text-gray-600 border-b py-2 leading-5"
      >
        {note.description}
      </Typography>
      <div className="flex items-center justify-between pt-3">
        <Tag label="Getting Started" />
        <div className="flex items-center">
          <Tooltip
            position="bottom-start"
            content={formatTime(note.created_at)}
          >
            <time className="flex items-center">
              <Clock size={12} />
              <Typography style="body3" className="mx-1">
                Created {timeAgo(note.created_at)}
              </Typography>
            </time>
          </Tooltip>
          <Avatar
            size="small"
            user={{
              name: `${user?.first_name} ${user?.last_name}`,
              imageUrl: user?.profile_image_path,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
