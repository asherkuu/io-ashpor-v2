import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { WorksSkeletonWrap, WorksSkeletonItem } from "../styled";

export const WorksLoader = React.memo(() => {
  return (
    <div>
      <WorksSkeletonWrap>
        <WorksSkeletonItem>
          <Skeleton className="sk-image" height={152} baseColor="#FFF" />
          <Skeleton className="sk-title" height={30} baseColor="#FFF" />
          <Skeleton className="sk-desc" height={20} baseColor="#FFF" />
          <Skeleton className="sk-desc" height={20} baseColor="#FFF" />
        </WorksSkeletonItem>
        <WorksSkeletonItem>
          <Skeleton className="sk-image" height={152} baseColor="#FFF" />
          <Skeleton className="sk-title" height={30} baseColor="#FFF" />
          <Skeleton className="sk-desc" height={20} baseColor="#FFF" />
          <Skeleton className="sk-desc" height={20} baseColor="#FFF" />
        </WorksSkeletonItem>
      </WorksSkeletonWrap>
      <WorksSkeletonWrap>
        <WorksSkeletonItem>
          <Skeleton className="sk-image" height={152} baseColor="#FFF" />
          <Skeleton className="sk-title" height={30} baseColor="#FFF" />
          <Skeleton className="sk-desc" height={20} baseColor="#FFF" />
          <Skeleton className="sk-desc" height={20} baseColor="#FFF" />
        </WorksSkeletonItem>
        <WorksSkeletonItem>
          <Skeleton className="sk-image" height={152} baseColor="#FFF" />
          <Skeleton className="sk-title" height={30} baseColor="#FFF" />
          <Skeleton className="sk-desc" height={20} baseColor="#FFF" />
          <Skeleton className="sk-desc" height={20} baseColor="#FFF" />
        </WorksSkeletonItem>
      </WorksSkeletonWrap>
    </div>
  );
});
