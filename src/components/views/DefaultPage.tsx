/*
 * SBS2 Frontend
 * Created on Tue May 05 2020
 *
 * Copyright (c) 2020 MasterR#C0RD
 */

import React from "react";
import { User } from "../../classes/User";
import { Content } from "../../classes/Content";
import Grid from "../layout/Grid";
import Cell from "../layout/Cell";
import Moment from "moment";
import Link from "next/link";
import MarkupView from "../functional/MarkupView";
import Photo from "../functional/Photo";
import Gallery from "../layout/Gallery";

export default (({
    page,
    createUser,
    editUser
}) => {
    return <Grid
        className="defaultpage-view"
        cols={["1fr"]}
        rows={["min-content", "1fr"]}
        style={{
            minHeight: "calc(100vh - var(--nav-height))"
        }}
    >
        <Cell x={1} y={1}>
            <h1>{page.name}</h1>
        </Cell>
        <Cell x={1} y={2}>
            <div id="page-info">
                <b>{`Author: `}</b>
                <Link href="/user/[uid]" as={`/user/${createUser.id}`}>
                    <a>
                        <img src={createUser.Avatar(32)} className="info-avatar" />
                        {createUser.username}
                    </a>
                </Link>
            </div>
            <br />
            <MarkupView code={page.content} markupLang={page.Markup} />
            <br />
            {page.values.photos && <Gallery width="400px" height="300px">{page.values.photos.split(",").map(photo => <Photo nodrag fileID={+photo} size={400} key={photo} />)}</Gallery>}
        </Cell>
    </Grid >
}) as React.FunctionComponent<{
    page: Content,
    createUser: User,
    editUser: User
}>;